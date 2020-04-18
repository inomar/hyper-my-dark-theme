
    module.exports.decorateConfig = config => {
      return Object.assign({}, config, {
        cursorColor: 'rgba(93, 18, 255, 0.5)',
        cursorAccentColor: '#1d1d1d',
        foregroundColor: '#2d6ac5',
        backgroundColor: '#1d1d1d',
        selectionColor: 'rgba(0, 203, 150, 0.09999999999999998)',
        borderColor: '#00c2ff',
        colors: {
          black: '#1d1d1d',
          red: '#d32d14',
          green: '#01bd02',
          yellow: '#ffab01',
          blue: '#00cb96',
          magenta: '#cb00e6',
          cyan: '#00c2ff',
          white: '#2d6ac5',
          lightBlack: '#202a39',
          lightRed: '#00ffff',
          lightGreen: '#01bd02',
          lightYellow: '#ffab01',
          lightBlue: '#00cb96',
          lightMagenta: '#cb00e6',
          lightCyan: '#00c2ff',
          lightWhite: '#3077e1',
        },
      });
    };
  