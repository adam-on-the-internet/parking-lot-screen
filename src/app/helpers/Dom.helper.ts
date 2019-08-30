export abstract class DomHelper {
  public static setBackground(url: string): void {
    document.body.style.backgroundImage = `url(${url})`;
  }
}
