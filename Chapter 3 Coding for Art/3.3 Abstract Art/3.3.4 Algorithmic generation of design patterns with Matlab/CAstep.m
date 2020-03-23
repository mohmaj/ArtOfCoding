function y = CAstep( x , rule )
  y = ( rule( 8 - ( circshift( x' , -1 )' + ( 2 * ( x + ( 2 * ( circshift( x' , 1 )' ) ) ) ) ) ) ) ;
end