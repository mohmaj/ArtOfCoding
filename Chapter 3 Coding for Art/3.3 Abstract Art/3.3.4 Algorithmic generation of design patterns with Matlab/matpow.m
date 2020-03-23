function T = matpow( M , sym )
   prod = M( : , : , 1 ) ;
   for i = 2 : sym
       M( : , : , i ) = M( : , : , i ) * prod ;
       prod = ( M( : , : , i ) ) ;
   end
   T = M ;
end

