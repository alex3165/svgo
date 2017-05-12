exports.type = 'perItem';

exports.active = true;

exports.description = 'Convert attributes names to camelCase';

exports.params = {};

const capitalizeFirstLetter = (string) => (
  string.charAt(0).toUpperCase() + string.slice(1)
);

exports.fn = (item, params) => {
  if (item.elem) {
    item.eachAttr((attr) => {
      if (attr.name.includes('-')) {
        const attrArr = attr.name
          .split('-')
          .map((str, index) => {
            if (index === 0) {
              return str;
            } else {
              return capitalizeFirstLetter(str);
            }
          });

        attr.name = attrArr.join('');
      }
    });
  }
}
