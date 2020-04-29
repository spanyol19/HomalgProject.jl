var documenterSearchIndex = {"docs":
[{"location":"examples/#HomalgProject.jl-1","page":"Examples","title":"HomalgProject.jl","text":"","category":"section"},{"location":"examples/#Examples-1","page":"Examples","title":"Examples","text":"","category":"section"},{"location":"examples/#","page":"Examples","title":"Examples","text":"The following examples tests the functionality of the software projects","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"homalg project\nCAP project","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"DocTestSetup = quote\n    using HomalgProject\n    GAP.Globals.SizeScreen( GAP.julia_to_gap( [ 4096 ] ) )\n    LoadPackageAndExposeGlobals( \"GradedModules\", Main, all_globals = true )\n    LoadPackageAndExposeGlobals( \"GradedModulePresentationsForCAP\", Main, all_globals = true )\n    GAP.Globals.HOMALG_IO.show_banners = false\n    HomalgFieldOfRationalsInSingular = GAP.Globals.HomalgFieldOfRationalsInSingular\n    LeftPresentation = GAP.Globals.LeftPresentation\n    Display = GAP.Display\n    PurityFiltration = GAP.Globals.PurityFiltration\n    SpectralSequence = GAP.Globals.SpectralSequence\n    FilteredByPurity = GAP.Globals.FilteredByPurity\n    OnFirstStoredPresentation = GAP.Globals.OnFirstStoredPresentation\n    OnLastStoredPresentation = GAP.Globals.OnLastStoredPresentation\n    GradedRing = GAP.Globals.GradedRing\n    GradedLeftPresentations = GAP.Globals.GradedLeftPresentations\n    InfoOfInstalledOperationsOfCategory = GAP.Globals.InfoOfInstalledOperationsOfCategory\n    ListPrimitivelyInstalledOperationsOfCategory = GAP.Globals.ListPrimitivelyInstalledOperationsOfCategory\n    GradedFreeLeftPresentation = GAP.Globals.GradedFreeLeftPresentation\n    GradedPresentationMorphism = GAP.Globals.GradedPresentationMorphism\n    IsWellDefined = GAP.Globals.IsWellDefined\n    IsMonomorphism = GAP.Globals.IsMonomorphism\n    IsEpimorphism = GAP.Globals.IsEpimorphism\n    ImageEmbedding = GAP.Globals.ImageEmbedding\n    CokernelObject = GAP.Globals.CokernelObject\n    IsZero = GAP.Globals.IsZero\n    AffineDimension = GAP.Globals.AffineDimension\n    SetNameFunction = GAP.Globals.SetNameFunction\n    FullSubcategoryByMembershipFunction = GAP.Globals.FullSubcategoryByMembershipFunction\n    / = GAP.Globals.QUO\n    CanonicalProjection = GAP.Globals.CanonicalProjection\n    InstallFunctor = GAP.Globals.InstallFunctor\n    ApplyFunctor = GAP.Globals.ApplyFunctor\n    IsIsomorphism = GAP.Globals.IsIsomorphism\nend","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"julia> using HomalgProject\n\njulia> LoadPackageAndExposeGlobals( \"GradedModules\", Main, all_globals = true )\n\njulia> ℚ = HomalgFieldOfRationalsInSingular( )\nGAP: Q\n\njulia> R = ℚ[\"x,y,z\"]\nGAP: Q[x,y,z]\n\njulia> m = \"[ x*y,y*z,z,0,0, x^3*z,x^2*z^2,0,x*z^2,-z^2, x^4,x^3*z,0,x^2*z,-x*z, 0,0,x*y,-y^2,x^2-1, 0,0,x^2*z,-x*y*z,y*z, 0,0,x^2*y-x^2,-x*y^2+x*y,y^2-y ]\";\n\njulia> m = HomalgMatrix( m, 6, 5, R )\nGAP: <A 6 x 5 matrix over an external ring>\n\njulia> M = LeftPresentation( m )\nGAP: <A left module presented by 6 relations for 5 generators>\n\njulia> Display( M )\nx*y,  y*z,    z,        0,         0,\nx^3*z,x^2*z^2,0,        x*z^2,     -z^2,\nx^4,  x^3*z,  0,        x^2*z,     -x*z,\n0,    0,      x*y,      -y^2,      x^2-1,\n0,    0,      x^2*z,    -x*y*z,    y*z,\n0,    0,      x^2*y-x^2,-x*y^2+x*y,y^2-y\n\n\nCokernel of the map\n\nQ[x,y,z]^(1x6) --> Q[x,y,z]^(1x5),\n\ncurrently represented by the above matrix\n\njulia> filt = PurityFiltration( M )\nGAP: <The ascending purity filtration with degrees [ -3 .. 0 ] and graded parts:\n   0:\t<A codegree-[ 1, 1 ]-pure rank 2 left module presented by 3 relations for 4 generators>\n  -1:\t<A codegree-1-pure grade 1 left module presented by 4 relations for 3 generators>\n  -2:\t<A cyclic reflexively pure grade 2 left module presented by 2 relations for a cyclic generator>\n  -3:\t<A cyclic reflexively pure grade 3 left module presented by 3 relations for a cyclic generator>\nof\n<A non-pure rank 2 left module presented by 6 relations for 5 generators>>\n\njulia> Display( filt )\nDegree 0:\n\n0,  0,x, -y,\nx*y,0,-z,0,\nx^2,0,0, -z\n\n\nCokernel of the map\n\nQ[x,y,z]^(1x3) --> Q[x,y,z]^(1x4),\n\ncurrently represented by the above matrix\n----------\nDegree -1:\n\ny,-z,0,\n0,x, -y,\nx,0, -z,\n0,-y,x^2-1\n\n\nCokernel of the map\n\nQ[x,y,z]^(1x4) --> Q[x,y,z]^(1x3),\n\ncurrently represented by the above matrix\n----------\nDegree -2:\n\nQ[x,y,z]/< z, y-1 >\n----------\nDegree -3:\n\nQ[x,y,z]/< z, y, x >\n\njulia> II_E = SpectralSequence( filt )\nGAP: <A stable homological spectral sequence with sheets at levels [ 0 .. 4 ] each consisting of left modules at bidegrees [ -3 .. 0 ]x[ 0 .. 3 ]>\n\njulia> Display( II_E )\nThe associated transposed spectral sequence:\n\na homological spectral sequence at bidegrees\n[ [ 0 .. 3 ], [ -3 .. 0 ] ]\n---------\nLevel 0:\n\n * * * *\n * * * *\n . * * *\n . . * *\n---------\nLevel 1:\n\n * * * *\n . . . .\n . . . .\n . . . .\n---------\nLevel 2:\n\n s . . .\n . . . .\n . . . .\n . . . .\n\nNow the spectral sequence of the bicomplex:\n\na homological spectral sequence at bidegrees\n[ [ -3 .. 0 ], [ 0 .. 3 ] ]\n---------\nLevel 0:\n\n * * * *\n * * * *\n . * * *\n . . * *\n---------\nLevel 1:\n\n * * * *\n * * * *\n . * * *\n . . . *\n---------\nLevel 2:\n\n s . . .\n * s . .\n . * * .\n . . . *\n---------\nLevel 3:\n\n s . . .\n * s . .\n . . s .\n . . . *\n---------\nLevel 4:\n\n s . . .\n . s . .\n . . s .\n . . . s\n\njulia> FilteredByPurity( M )\nGAP: <A non-pure rank 2 left module presented by 12 relations for 9 generators>\n\njulia> Display( M )\n0,  0,x, -y,0,1, 0,    0,  0,\nx*y,0,-z,0, 0,0, 0,    0,  0,\nx^2,0,0, -z,1,0, 0,    0,  0,\n0,  0,0, 0, y,-z,0,    0,  0,\n0,  0,0, 0, 0,x, -y,   -1, 0,\n0,  0,0, 0, x,0, -z,   0,  -1,\n0,  0,0, 0, 0,-y,x^2-1,0,  0,\n0,  0,0, 0, 0,0, 0,    z,  0,\n0,  0,0, 0, 0,0, 0,    y-1,0,\n0,  0,0, 0, 0,0, 0,    0,  z,\n0,  0,0, 0, 0,0, 0,    0,  y,\n0,  0,0, 0, 0,0, 0,    0,  x\n\n\nCokernel of the map\n\nQ[x,y,z]^(1x12) --> Q[x,y,z]^(1x9),\n\ncurrently represented by the above matrix\n\njulia> OnFirstStoredPresentation( M )\nGAP: <A non-pure rank 2 left module presented by 6 relations for 5 generators>\n\njulia> Display( M )\nx*y,  y*z,    z,        0,         0,\nx^3*z,x^2*z^2,0,        x*z^2,     -z^2,\nx^4,  x^3*z,  0,        x^2*z,     -x*z,\n0,    0,      x*y,      -y^2,      x^2-1,\n0,    0,      x^2*z,    -x*y*z,    y*z,\n0,    0,      x^2*y-x^2,-x*y^2+x*y,y^2-y\n\n\nCokernel of the map\n\nQ[x,y,z]^(1x6) --> Q[x,y,z]^(1x5),\n\ncurrently represented by the above matrix\n\njulia> OnLastStoredPresentation( M )\nGAP: <A non-pure rank 2 left module presented by 12 relations for 9 generators>\n\njulia> Display( M )\n0,  0,x, -y,0,1, 0,    0,  0,\nx*y,0,-z,0, 0,0, 0,    0,  0,\nx^2,0,0, -z,1,0, 0,    0,  0,\n0,  0,0, 0, y,-z,0,    0,  0,\n0,  0,0, 0, 0,x, -y,   -1, 0,\n0,  0,0, 0, x,0, -z,   0,  -1,\n0,  0,0, 0, 0,-y,x^2-1,0,  0,\n0,  0,0, 0, 0,0, 0,    z,  0,\n0,  0,0, 0, 0,0, 0,    y-1,0,\n0,  0,0, 0, 0,0, 0,    0,  z,\n0,  0,0, 0, 0,0, 0,    0,  y,\n0,  0,0, 0, 0,0, 0,    0,  x\n\n\nCokernel of the map\n\nQ[x,y,z]^(1x12) --> Q[x,y,z]^(1x9),\n\ncurrently represented by the above matrix\n","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"julia> using HomalgProject\n\njulia> LoadPackageAndExposeGlobals( \"GradedModulePresentationsForCAP\", Main, all_globals = true )\n\njulia> ℚ = HomalgFieldOfRationalsInSingular( )\nGAP: Q\n\njulia> S = GradedRing( ℚ[\"x,y\"] )\nGAP: Q[x,y]\n(weights: yet unset)\n\njulia> Sgrmod = GradedLeftPresentations( S )\nGAP: The category of graded left f.p. modules over Q[x,y] (with weights [ 1, 1 ])\n\njulia> InfoOfInstalledOperationsOfCategory( Sgrmod )\n40 primitive operations were used to derive 179 operations for this category which\n* IsAbCategory\n* IsMonoidalCategory\n* IsAbelianCategoryWithEnoughProjectives\n\njulia> #ListPrimitivelyInstalledOperationsOfCategory( Sgrmod )\n\njulia> M = GradedFreeLeftPresentation( 2, S, @gap([ 1, 1 ]) )\nGAP: <An object in The category of graded left f.p. modules over Q[x,y] (with weights [ 1, 1 ])>\n\njulia> N = GradedFreeLeftPresentation( 1, S, @gap([ 0 ]) )\nGAP: <An object in The category of graded left f.p. modules over Q[x,y] (with weights [ 1, 1 ])>\n\njulia> mat = HomalgMatrix( \"[x,y]\", 2, 1, S )\nGAP: <A 2 x 1 matrix over a graded ring>\n\njulia> Display( mat )\nx,\ny\n\n(over a graded ring)\n\njulia> ϕ = GradedPresentationMorphism( M, mat, N )\nGAP: <A morphism in The category of graded left f.p. modules over Q[x,y] (with weights [ 1, 1 ])>\n\njulia> IsWellDefined( ϕ )\ntrue\n\njulia> IsMonomorphism( ϕ )\nfalse\n\njulia> IsEpimorphism( ϕ )\nfalse\n\njulia> ι = ImageEmbedding( ϕ )\nGAP: <A monomorphism in The category of graded left f.p. modules over Q[x,y] (with weights [ 1, 1 ])>\n\njulia> IsMonomorphism( ι )\ntrue\n\njulia> IsIsomorphism( ι )\nfalse\n\njulia> coker_mod = CokernelObject( ϕ )\nGAP: <An object in The category of graded left f.p. modules over Q[x,y] (with weights [ 1, 1 ])>\n\njulia> Display( coker_mod )\nx,\ny\n\n(over a graded ring)\n\nAn object in The category of graded left f.p. modules over Q[x,y] (with weights [ 1, 1 ])\n\n(graded, degree of generator:[ 0 ])\n\njulia> IsZero( coker_mod )\nfalse\n\njulia> is_artinian = GAP.julia_to_gap( M -> AffineDimension( M ) <= 0 );\n\njulia> SetNameFunction( is_artinian, g\"is_artinian\" )\n\njulia> C = FullSubcategoryByMembershipFunction( Sgrmod, is_artinian )\nGAP: <Subcategory of The category of graded left f.p. modules over Q[x,y] (with weights [ 1, 1 ]) by is_artinian>\n\njulia> CohP1 = Sgrmod / C\nGAP: The Serre quotient category of The category of graded left f.p. modules over Q[x,y] (with weights [ 1, 1 ]) by test function with name: is_artinian\n\njulia> InfoOfInstalledOperationsOfCategory( CohP1 )\n21 primitive operations were used to derive 146 operations for this category which\n* IsAbCategory\n* IsAbelianCategory\n\njulia> Sh = CanonicalProjection( CohP1 )\nGAP: Embedding in The Serre quotient category of The category of graded left f.p. modules over Q[x,y] (with weights [ 1, 1 ]) by test function with name: is_artinian\n\njulia> InstallFunctor( Sh, g\"Sheafification\" )\n\njulia> ψ = ApplyFunctor( Sh, ϕ )\nGAP: <A morphism in The Serre quotient category of The category of graded left f.p. modules over Q[x,y] (with weights [ 1, 1 ]) by test function with name: is_artinian>\n\njulia> IsMonomorphism( ψ )\nfalse\n\njulia> IsEpimorphism( ψ )\ntrue\n\njulia> coker_shv = CokernelObject( ψ )\nGAP: <A zero object in The Serre quotient category of The category of graded left f.p. modules over Q[x,y] (with weights [ 1, 1 ]) by test function with name: is_artinian>\n\njulia> IsZero( coker_shv )\ntrue\n\njulia> ϵ = ApplyFunctor( Sh, ι )\nGAP: <A morphism in The Serre quotient category of The category of graded left f.p. modules over Q[x,y] (with weights [ 1, 1 ]) by test function with name: is_artinian>\n\njulia> IsIsomorphism( ϵ )\ntrue\n","category":"page"},{"location":"examples/#","page":"Examples","title":"Examples","text":"DocTestSetup = nothing","category":"page"},{"location":"#HomalgProject.jl-1","page":"Home","title":"HomalgProject.jl","text":"","category":"section"},{"location":"#Introduction-1","page":"Home","title":"Introduction","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"The Julia package HomalgProject provides simplified access to the repositories of the GAP packages hosted at the GitHub organisation https://github.com/homalg-project, most of which are based on the","category":"page"},{"location":"#","page":"Home","title":"Home","text":"CAP project,\nhomalg project.","category":"page"},{"location":"#","page":"Home","title":"Home","text":"These are open source GAP multi-package projects for constructive category theory and homological algebra with applications to module theory of commutative and non-commutative algebras and algebraic geometry.","category":"page"},{"location":"#Installation-1","page":"Home","title":"Installation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"julia> using Pkg\njulia> Pkg.add(\"HomalgProject\")","category":"page"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"#","page":"Home","title":"Home","text":"Modules = [HomalgProject]","category":"page"},{"location":"#HomalgProject.HomalgProject","page":"Home","title":"HomalgProject.HomalgProject","text":"The Julia package HomalgProject provides simplified access to the repositories of the GAP packages hosted at the GitHub organisation https://github.com/homalg-project, most of which are based on the\n\nCAP project,\nhomalg project.\n\nThese are open source GAP multi-package projects for constructive category theory and homological algebra with applications to module theory of commutative and non-commutative algebras and algebraic geometry.\n\nThe source code repository and the online documentation can be found at\n\nhttps://github.com/homalg-project/HomalgProject.jl\n\n\n\n","category":"module"}]
}
