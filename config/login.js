async function checkSession(){

    const { data } = await db.auth.getSession();

    if(data.session){

        window.location.href = "index.html";

    }

}

checkSession();