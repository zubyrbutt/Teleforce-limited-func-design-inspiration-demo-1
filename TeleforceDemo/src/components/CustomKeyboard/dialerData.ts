export const dialerRows = (handleButtonPress: (value: string) => void) => [
  {
    buttons: [
      {number: '1', letters: '', onPress: () => handleButtonPress('1')},
      {number: '2', letters: 'ABC', onPress: () => handleButtonPress('2')},
      {number: '3', letters: 'DEF', onPress: () => handleButtonPress('3')},
    ],
  },
  {
    buttons: [
      {number: '4', letters: 'GHI', onPress: () => handleButtonPress('4')},
      {number: '5', letters: 'JKL', onPress: () => handleButtonPress('5')},
      {number: '6', letters: 'MNO', onPress: () => handleButtonPress('6')},
    ],
  },
  {
    buttons: [
      {number: '7', letters: 'PQRS', onPress: () => handleButtonPress('7')},
      {number: '8', letters: 'TUV', onPress: () => handleButtonPress('8')},
      {number: '9', letters: 'WXYZ', onPress: () => handleButtonPress('9')},
    ],
  },
  {
    buttons: [
      {number: '*', letters: '', onPress: () => handleButtonPress('*')},
      {
        number: '0',
        letters: '+',
        onPress: () => handleButtonPress('0'),
        onLongPress: () => handleButtonPress('+'),
      },
      {number: '#', letters: '', onPress: () => handleButtonPress('#')},
    ],
  },
];
