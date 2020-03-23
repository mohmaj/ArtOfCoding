function z = REDUTN( T )
   if all( lhalf( T ) == rhalf( T ) )
     z = REDUTN( lhalf( T ) ) ;
   else
     z = T ;
   end
end

