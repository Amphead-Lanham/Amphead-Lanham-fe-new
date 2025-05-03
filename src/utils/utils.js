export const formatAnnouncementBody = (string) => {
  return string.replaceAll('---', '\r\n').replaceAll('.', '.\n');
};
