document.addEventListener("DOMContentLoaded",()=>{
    let _valores = [
        document.querySelector("#x1"),
        document.querySelector("#x2"),
        document.querySelector("#x3"),
        document.querySelector("#x4"),
        document.querySelector("#x5"),
        document.querySelector("#x6"),
        document.querySelector("#w1"),
        document.querySelector("#w2"),
        document.querySelector("#w3"),
        document.querySelector("#w4"),
        document.querySelector("#w5"),
        document.querySelector("#w6"),
        document.querySelector("#w7"),
        document.querySelector("#w8"),
        document.querySelector("#fn4"),
        document.querySelector("#fn5"),
        document.querySelector("#fn6")
    ];
    let [x1,x2,x3,x4,x5,x6,w1,w2,w3,w4,w5,w6,w7,w8,fn4,fn5,fn6] = _valores;
    let btnLimpiar = document.querySelector("#btnLimpiar");
    // Funcion que calculo la sigmoidea
    let f_sigmoidea = (x)=>{return 1/(1+(Math.pow(2.718,(-1*x))))};
    // Para un calculo mas exacto se puede usar la linea siguiente y comentar la anterior
    //let f_sigmoidea = (x)=>{return 1/(1+(Math.pow(Math.E,(-1*x))))};

    // Obtenemos valores de los inputs
    document.addEventListener("input",(e)=>{
        // Evento personalizado
        e.preventDefault();
        if(["x1","x2","x3","w1","w2","w3","w4","w5","w6","w7","w8"].includes(e.target.id)){
            // Calculo de x4
            let _x4 =  parseFloat(x1.value)* parseFloat(w1.value)+parseFloat(x2.value)* parseFloat(w3.value)+parseFloat(x3.value)* parseFloat(w5.value);
            x4.value = isNaN(_x4)?null:_x4;
            // Calculo de x5
            let _x5 = parseFloat(x1.value)* parseFloat(w2.value) + parseFloat(x2.value)*parseFloat(w4.value)+parseFloat(x3.value)*parseFloat(w6.value);
            x5.value = isNaN(_x5)?null:_x5;
            // Calculo de FA(N4)
            fn4.value = isNaN(_x4)?null:f_sigmoidea(_x4);
            // Calculo de FA(N5)
            fn5.value = isNaN(_x5)?null:f_sigmoidea(_x5);
            // Calculo de x6
            let _x6 = parseFloat(fn4.value)*parseFloat(w7.value)+parseFloat(fn5.value)*parseFloat(w8.value);
            x6.value = isNaN(_x6)?null:_x6;
            // Calculo de FA(N6)
            fn6.value = isNaN(_x6)?null:f_sigmoidea(_x6);
        }
        
    });

    //Limpieza de valores
    btnLimpiar.addEventListener("click",function(e){
        // Evento personalizado
        e.preventDefault();
        _valores.forEach(p_value=>{
                p_value.value = null;
        });

    });
    
});