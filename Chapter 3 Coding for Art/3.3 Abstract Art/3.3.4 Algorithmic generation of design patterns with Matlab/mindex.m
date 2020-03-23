function M = mindex( T , K , sym )
   M = [] ;
   for i = 1 : floor( K / sym )
      for j = 1 : sym
         M = vertcat( M , reshape( T( : , 1 , j ) , 1 , 2 ) ) ; 
      end
   end
   xres = ravel( M( : , 1 , : ) ) ;
   yres = ravel( M( : , 2 , : ) ) ;
   M = transpose( vertcat( xres , yres ) ) ;
end