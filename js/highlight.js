define(["coreJS/adapt", "templates"], function(Adapt) {
    
    Adapt.register('highlight', 'view', {
        
        el: ".page-title",
        
        initialize: function() {
            this.render();
        },
        
        render: function() {
            var data = {"title":"Hello World"};
            var template = Handlebars.templates["template"];
            this.$el.append(template(data));
            return this;
        }
        
    });
    
    
})