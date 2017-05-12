exports.type = 'perItem';

exports.active = true;

exports.description = 'Remove xml tag';

exports.params = [];

exports.fn = (item, params) => {
  if (
    item.processinginstruction &&
    item.processinginstruction.name === 'xml'
  ) {
    return false
  }
}
