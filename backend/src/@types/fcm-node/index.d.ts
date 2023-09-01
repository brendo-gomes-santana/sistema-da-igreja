// fcm-node.d.ts

declare module 'fcm-node' {
    class FCM {
      constructor(apiKey: string);
      send(message: any, callback: (err: any, response: any) => void): void;
    }
  
    export = FCM;
  }
  