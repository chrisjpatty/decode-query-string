const parseUrlQuery = (input) => {
  let search = input.split("?")
  let partsArray = search[1].split("&")
  let output = {};
  partsArray.forEach((part)=>{
    let pair = part.split("=")
    output[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1])
  })
  console.log(output);
  return output
}
export default parseUrlQuery;
