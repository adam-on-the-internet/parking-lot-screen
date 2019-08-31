export abstract class BooleanHelper {
  public static hasValue(item): boolean {
    return !this.isNull(item) && !this.isUndefined(item);
  }

  public static isNull(item): boolean {
    return item === null;
  }

  public static isUndefined(item): boolean {
    return item === undefined;
  }
}
