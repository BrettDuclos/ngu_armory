export class Utils {
  public static getValue(value: number) {
    return value === 0 ? 1 : value;
  }

  public static getNullableValue(value: any) {
    return value == null ? 0 : value.value;
  }

  public static textColor(value: number) {
    if (value > 0) {
      return 'green';
    } else if (value < 0) {
      return 'red';
    }
    return '';
  }
}
