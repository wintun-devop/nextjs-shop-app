module.exports = {
    apps: [
        {
            "name": "nextjs-shop-app",
            "script": "./node_modules/next/dist/bin/next",
            "args": "start",
            "env": {
                "PORT": "3001"
            }
        },
        // {
        //     name: 'cron-job',
        //     "script": "./cron/cron.ts",
        //     "interpreter": 'node',
        //     "interpreterArgs": '--import tsx',
        // }
    ],
  };