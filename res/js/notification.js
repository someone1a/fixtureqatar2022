function noti(){
    if (Notification.permission !== 'denied') {
        Notification.requestPermission(function (permission) {

        });
    }
    if (Notification.permission === "granted") {
        
        var body = "Ejemplo de notificacion";
        var icon = "https://www.quecodigo.com/img/qc_logo.jpg";
        var title = "IMPORTANTE";
        var options = {
            body: body,      
            icon: icon,      
            lang: "ES",      
            tag: 'notify',   
            dir: 'auto',     
            renotify: "true" 
        }
        var notification = new Notification(title,options);
        setTimeout(notification.close.bind(notification), 5000);
    }
}