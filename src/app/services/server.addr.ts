export class ServerAddr {
  private static serverAddr = 'http://52.78.230.42:3000/admin';

  public static getServerAddr() {
    return this.serverAddr;
  }
}