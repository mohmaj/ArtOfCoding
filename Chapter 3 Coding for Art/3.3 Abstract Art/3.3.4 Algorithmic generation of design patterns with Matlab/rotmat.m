function M=rotmat( sym )
   theta = ( 2 * pi ) / sym ;
   M = [ cos( theta ) , -sin( theta ) , sin( theta ) , cos( theta) ] ;
   M = reshape( M , 2 , 2 ) ;
   M = repmat( M , [ 1 , 1 , sym ] ) ;
end

