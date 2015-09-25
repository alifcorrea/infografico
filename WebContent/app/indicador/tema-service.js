angular.module('appServices').service('parametroTema', function () {
        var identificacaoTema = {};
        
        return {
            getIdentificacaoTema: function () {
                return identificacaoTema;
            },
            setIdentificacaoTema: function(value) {
            	identificacaoTema = value;
            }
        };
    });