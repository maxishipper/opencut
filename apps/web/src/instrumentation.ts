export async function register() {
    if (process.env.NEXT_RUNTIME === "nodejs") {
        const Sentry = await import("@sentry/node");
        Sentry.init({
            dsn: "https://FLZBdhwHPsjgSKLMpyd8@sonarly.dev/127",
            tracesSampleRate: 1.0,
            environment: process.env.NODE_ENV || "development",
        });

        // 🚀 Instant detection - sends ping when server starts
        Sentry.captureMessage("sonarly-backend-installed", "info");
    }
}
