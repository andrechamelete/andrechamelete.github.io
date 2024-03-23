<!DOCTYPE html>
<html lang="pt-br">
	<head>
        <meta name="Viewport" charset="UFT-8" content="width=device-width, initial-scale=1.0">
        <title>A!</title>
        <link rel="stylesheet" href="java.css">
        <link href='https://fonts.googleapis.com/css?family=Kalam' rel='stylesheet'>
        <link href='https://fonts.googleapis.com/css?family=Mukta' rel='stylesheet'>
        <link href='https://fonts.googleapis.com/css?family=Signikanegative' rel='stylesheet'>

	</head>

	<body>
        <h1>Programas Java</h1>

        <fieldset>
            <select>
                <option value="primo">Números Primo</option>
                <option value="fibo">Sequência de Fibonacci</option>
                <option value="MMC">MMC e MDC</option>
            </select>
            <legend class='legend'>Numero Primo</legend>
            <p>
                <form action='convert.jsp' method='post'>
                    Qual numero? <input type='text' name = 'tempF' id = 'tempF'/>
                    <p>
                        <input type='submit' style= 'font-weight: bold;' value = 'is Prime?'/>
                    </p>
                </form>
            </p> 

        
            <%!
                boolean flag = true;
                int fahr; 
            %>

            <%
                String fahrAsString = request.getParameter("tempF").trim();
                fahr = Integer.parseInt(fahrAsString);
                for (int i = 2; i < fahr; i++) {
                    if (fahr % i == 0) {
                        flag = false;
                        
                    }
                    else {
                        continue;}}
            %>

            <%= fahr + " is " + flag + " for Prime number" %>

            <p>
                <a href='index.html'>Outro numero</a>
            </p>
        
        </fieldset>
        
    </body>