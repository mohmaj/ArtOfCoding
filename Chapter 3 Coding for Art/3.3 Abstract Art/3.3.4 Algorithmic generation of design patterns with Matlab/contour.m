function res=contour(reps)
   a=[0,1,0,1] ;
   b=[1,1,0,1] ;
   res=a ;
   out=[] ;
   for i = 1 : reps-1
      for j = 1 : length(res)
         if res(j)==0
            out=horzcat(out,a) ;
         else
            out=horzcat(out,b) ;
         end
      end
      res=out ;
      out=[] ;
   end
   len = floor( length( res ) / 2 ) ;
   res = res( 1 : len ) ;
end

