
/**
 * 
 * @param {String} val 
 * @returns 
 */
 export default validateMobile = (val) => { 
    const firstPattern = /^(\+234|0)[8]{1}[0|1]{1}[0-9]{8}$/  
	const secondPattern = /^(\+234|0)[7 | 9]{1}[0]{1}[0-9]{8}$/ 
	const thirdPattern = /^(\+234|0)[8]{1}[0|1]{1}[0-9]{8}$/
    const fourthPattern = /^(\+234|0)[7 | 9]{1}[0]{1}[0-9]{8}$/ 
	try {
		if ( 
			String(val).match(firstPattern) || 
			String(val).match(secondPattern) || 
			String(val).match(thirdPattern) || 
			String(val).match(fourthPattern)) {
	        return true 
		}else {
			throw {
				name : "Please provide a valid name" , 
				value : null 
			}
		}
	}catch(err) {
		return false 
	}
} 