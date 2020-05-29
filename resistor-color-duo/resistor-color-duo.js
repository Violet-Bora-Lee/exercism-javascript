export const decodedValue = (arr) => {

  const COLORS = ["black","brown","red","orange","yellow","green","blue","violet","grey","white"];

  const colors = [...arr];

  return +`${COLORS.indexOf(colors[0])}${COLORS.indexOf(colors[1])}`;

};
