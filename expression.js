// expression

function Expression(ExpressionText, SymbolProperties, Name, Description){
	this.Name=Name;
	this.Desecription=Description;
	this.ExpressionText=ExpressionText;// a*(b+c)=a*b+a*c, a*b=b*a, 
	
	this.VariableName=[];//[0]="a"
	
	this.NumerateSymbols(InputExpression, SymbolProperties);
	
}

Expression.prototype.NumerateSymbols=function(InputExpression, SymbolProperties){
	// Find the variable positions in the expression
	
	// 	
}

Expression.prototype.CheckForErrors=function(SpecificVariableName){
	
}


Expression.prototype.Substitute=function(variableName, InputExpression){
	this.Match(InputExpression);
	
	A=new Expression(undefined, undefined, );
	
}

Expression.prototype.Match=function(InputExpression){
	// find sub-expressions that match the structure of the input expression
}

Expression.prototype.Split=function(){
	
}

Expression.prototype.SubExpression=function(InputExpression, ){
	// find elements that can be considered whole under the order of operations
	
	 
}

Expression.prototype.Isolate=function(SpecificVariableName){
	
}








function FunctionalExpression(){
	
	
}