const parseUrlQuery = (input) => {
  let search = input.split("?")
  let partsArray = search[1].split("&")
  let output = {};
  partsArray.forEach((part)=>{
    let pair = part.split("=")
    output[decodeURI(pair[0])] = decodeURI(pair[1])
  })
  console.log(output);
  return output
}
export default parseUrlQuery;
