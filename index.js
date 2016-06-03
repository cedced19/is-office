
var mimes = [
  'msword',
  'vnd.openxmlformats-officedocument.wordprocessingml.document',
  'vnd.openxmlformats-officedocument.wordprocessingml.template',
  'vnd.ms-word.document.macroEnabled.12',
  'vnd.ms-word.template.macroEnabled.12',
  'vnd.ms-excel',
  'vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  'vnd.openxmlformats-officedocument.spreadsheetml.template',
  'vnd.ms-excel.sheet.macroEnabled.12',
  'vnd.ms-excel.template.macroEnabled.12',
  'vnd.ms-excel.addin.macroEnabled.12',
  'vnd.ms-excel.sheet.binary.macroEnabled.12',
  'vnd.ms-powerpoint',
  'vnd.openxmlformats-officedocument.presentationml.presentation',
  'vnd.openxmlformats-officedocument.presentationml.template',
  'vnd.openxmlformats-officedocument.presentationml.slideshow',
  'vnd.ms-powerpoint.addin.macroEnabled.12',
  'vnd.ms-powerpoint.presentation.macroEnabled.12',
  'vnd.ms-powerpoint.template.macroEnabled.12',
  'vnd.ms-powerpoint.slideshow.macroEnabled.12',
  'vnd.oasis.opendocument.text',
  'vnd.oasis.opendocument.text-template',
  'vnd.oasis.opendocument.text-web',
  'vnd.oasis.opendocument.text-master',
  'vnd.oasis.opendocument.graphics',
  'vnd.oasis.opendocument.graphics-template',
  'vnd.oasis.opendocument.presentation',
  'vnd.oasis.opendocument.presentation-template',
  'vnd.oasis.opendocument.spreadsheet',
  'vnd.oasis.opendocument.spreadsheet-template',
  'vnd.oasis.opendocument.chart',
  'vnd.oasis.opendocument.formula',
  'vnd.oasis.opendocument.database',
  'vnd.oasis.opendocument.image',
  'vnd.openofficeorg.extension',
  'vnd.sun.xml.writer',
  'vnd.sun.xml.writer.template',
  'vnd.sun.xml.writer.global',
  'vnd.stardivision.writer',
  'vnd.stardivision.writer-global',
  'vnd.sun.xml.calc',
  'vnd.sun.xml.calc.template',
  'vnd.stardivision.calc',
  'vnd.sun.xml.impress',
  'vnd.sun.xml.impress.template',
  'vnd.stardivision.impress',
  'vnd.sun.xml.draw',
  'vnd.sun.xml.draw.template',
  'vnd.stardivision.draw',
  'vnd.sun.xml.math',
  'vnd.stardivision.math'
];

module.exports = function (mime) {
  var list;
  mimes.forEach(function (item) {
    list += '|' + item;
  });
  var reg = new RegExp(list, 'gi');
  return reg.test(mime);
};
