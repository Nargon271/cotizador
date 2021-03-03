export function getDifference(year) {
    return new Date().getFullYear() - year
}

//Calculate based on brand
export function getBrand(brand) {
    let increment

    switch (brand) {
        case "europeo":
            increment = 1.30
            break
        case "americano":
            increment = 1.15
            break
        case "asiatico":
            increment = 1.05
            break 
        default:
            break
    }

    return increment
}

//calcular insurance tyoe
export function getPlan(plan){
return (plan ==="basico") ? 1.20 : 1.50
}

export function capitalize(text) {
 return text.charAt(0).toUpperCase() + text.slice(1)
}