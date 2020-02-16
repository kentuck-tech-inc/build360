export function isLocalDev(){
    console.log('isLocalDev check on href - ' + window.location.href)
    if( window.location.href.substring(7,12)==="llocal"){
        return true;
    } else {
        return false;
    }
}

export function isDevelopment(){
    console.log('isDevelopment check on href - ' + window.location.href)
    if( window.location.href.substring(8,11) ==="dev" || window.location.href.substring(7,10)==="dev"){
        return true;
    } else {
        return false;
    }
}

export function isProduction(){
    console.log('isProduction check on href - ' + window.location.href)
    return !isLocalDev && !isDevelopment;
}