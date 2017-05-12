exports.type = 'perItem';

exports.active = true;

exports.description = 'remove specific items';

exports.params = {
    items: []
};

exports.fn = (item, params) => {
  return !params.items.includes(item.elem)
}
