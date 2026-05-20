type ShutdownGlobal = typeof globalThis & {
  __leadHunterWebGracefulShutdownInstalled?: boolean;
  __leadHunterWebGracefulShutdownRunning?: boolean;
};

function installGracefulShutdown(runtimeGlobal: ShutdownGlobal) {
  if (runtimeGlobal.__leadHunterWebGracefulShutdownInstalled) return;
  runtimeGlobal.__leadHunterWebGracefulShutdownInstalled = true;

  const stop = (signal: NodeJS.Signals) => {
    if (runtimeGlobal.__leadHunterWebGracefulShutdownRunning) return;
    runtimeGlobal.__leadHunterWebGracefulShutdownRunning = true;

    console.info(`[Instrumentation] Graceful shutdown received ${signal}`);
    process.exit(0);
  };

  process.on('SIGTERM', stop);
  process.on('SIGINT', stop);
}

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    installGracefulShutdown(globalThis as ShutdownGlobal);
  }
}
