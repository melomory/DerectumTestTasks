/// <summary>
/// Функция бинарного поиска ключа по ассоциативному массиву
/// </summary>
/// <param name="a"></param>
/// <param name="low"></param>
/// <param name="high"></param>
/// <param name="key"></param>
/// <returns></returns>
static int Func1(ref KeyValuePair<int, string>[] a, int low, int high, int key)
{
  // int middle = low + ((high - low)/2);

  // if (low == high)
  //   return low;

  // if (key > a[middle].Key)
  //   return Func1(a, middle + 1, high, key);

  // return Func1(a, low, middle, key);
  int middle;
  while (low < high)
  {
    middle = (low + high) / 2;
    if (a[middle].Key < key)
    {
      low = middle + 1;
    }
    else
    {
      high = middle;
    }
  }
  return high;
}

/// <summary>
///   Функция заполнения упорядоченного по ключу ассоциативного массива
/// </summary>
/// <param name="a">Ссылка на массив</param>
/// <param name="key">Ключ</param>
/// <param name="value">Значение</param>
static void Func2(ref KeyValuePair<int, string>[] a, int key, string value)
{
  int pos;
  //KeyValuePair<int, string> keyValuePair;
  int arrayLength = a.Length;

  if (arrayLength == 0)
  {
    Array.Resize(ref a, 1);
    // keyValuePair = new KeyValuePair<int, string>(key, value);
    // a[0] = keyValuePair;
    a[0] = new KeyValuePair<int, string>(key, value);
    return;
  }

  if (key < a[0].Key)
    pos = 0;
  else if (key > a[arrayLength - 1].Key)
    pos = arrayLength;
  else
    pos = Func1(ref a, 0, arrayLength - 1, key);

  Array.Resize(ref a, ++arrayLength);
  for (int i = arrayLength - 1; i > pos; --i)
    a[i] = a[i - 1];

  // keyValuePair = new KeyValuePair<int, string>(key, value);
  // a[pos] = keyValuePair;
  a[pos] = new KeyValuePair<int, string>(key, value);
}
