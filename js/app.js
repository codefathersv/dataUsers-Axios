(() => {

    const $datos = document.getElementById("datos");

    $datos.addEventListener("click", (e) => {

        const $filas = document.getElementById("filas");

        axios("https://jsonplaceholder.typicode.com/users")
            .then((res) => {

                res.data.forEach(el => {
                    $filas.innerHTML += `
                        <tr>
                            <td>${el.name}</td>
                            <td>${el.email}</td>
                            <td>${el.phone}</td>
                        </tr>
                    `;
                })

                $datos.disabled = true;

            })
            .catch((err) => {

                let message = err.response.statusText || "Ocurrio un error";
                $filas.innerHTML = `
                    <tr>
                        <td colspan="3">Error ${err.response.status}: ${message}</td>
                    </tr>
                `;

            });

    })

})();