export const formatAnnouncementBody = (string) => {
  // return string.replaceAll('.', '.  -farts-')
  //   .replaceAll('<line-break>', '\n');
  // staging change
  return string.replaceAll('---', '\r\n').replaceAll('.', '.\n');
};
