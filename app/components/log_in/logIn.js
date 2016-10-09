/* import dependencies */

var React = require('react');

function getLoginState(){
    return {};//LoginStore.getLogin;
}

/**
 *  {
      title: 'Voto electrónico',
      description: 'Realizar el voto de manera electrónica para reducir tiempos de espera.',
      start_date: '03/11/2016',
      picture: 'app/images/electronic.jpeg'
    },
    {
      title: 'Tabla periodica',
      description: 'Realizar una aplicación móvil para aprender sobre los elementos químicos.',
      start_date: '12/12/2016',
      picture: 'app/images/chemistry.jpeg'
    }
 */

/* login component */
var LogIn = React.createClass({
    getInitialState: function(){
        return getLoginState();
    },
    render:function() {
        return (
            <div>
                <div className="row">
                    <div className="header small-12 medium-12 large-12 columns"> 
                        <h1>LogIn</h1>
                    </div>
                </div>
                <div className="grid-block">
                    <div className="grid-block small-12 medium-12 large-12 vertical">
                        <div className="grid-content">
                       
                        </div>
                    </div>
                </div>
            </div>
        )
    }
});

module.exports = LogIn;