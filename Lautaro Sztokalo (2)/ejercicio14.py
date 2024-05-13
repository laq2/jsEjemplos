def salarioTOTAL():
    auto = []
    inputUser = ""
    while inputUser != "salir":
        inputUser = input("ingrese el valor del auto vendido o salir")
        if inputUser == float (inputUser):
            auto.append(inputUser)

    Aux = sum(auto)
    comision = Aux * 0.005
salarioTOTAL()