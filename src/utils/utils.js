export const formatAnnouncementBody = (string) => {
  // return string.replaceAll('.', '.  -farts-')
  //   .replaceAll('<line-break>', '\n');
  return string.replaceAll('---', '\r\n').replaceAll('.', '.\n');
};
