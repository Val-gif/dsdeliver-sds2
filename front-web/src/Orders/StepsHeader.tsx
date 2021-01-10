function StepHeader() {
    return (
        <header className="orders-steps-container">
            <div className="orders-steps-cotent">
                <h1 className="steps-title">
                    SIGAS AS  <br /> Etapas

                </h1>
                <ul className="steps-items">
                    <li>
                        <span className="step-number">1</span>
                        Selecione a localização
                    </li>
                    <li>
                        <span className="step-number">2</span>
                        Depois clique em <strong>"ENVIAR PEDIDO"</strong>

                    </li>
                </ul>

            </div>

            
        </header>
      

    )
        
}

export default StepHeader;