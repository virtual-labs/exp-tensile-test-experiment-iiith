### What is Measured?

During the tensile test, the following quantities are measured:

- Applied load, $P$
- Extension of the specimen, $\Delta L$
- Original gauge length, $L$
- Original diameter, $d$
- Final gauge length after fracture, $L_f$
- Final diameter at the necked section, $d_f$

These measurements are used to determine the mechanical properties of the material.

### Why are the Calculations Required?

The measured quantities alone do not completely describe the behaviour of a material.

The calculations help determine:

- Stress developed in the specimen
- Strain produced due to loading
- Young's Modulus
- Yield Strength
- Ultimate Tensile Strength
- Percentage Elongation
- Percentage Reduction in Area

These properties are required for engineering design and material selection.

### Observation Table

Assume a specimen with:

- Diameter = 20 mm
- Original Gauge Length = 50 mm

| Load (kN) | Extension (mm) |
| --------- | -------------- |
| 0         | 0.000          |
| 10        | 0.025          |
| 20        | 0.050          |
| 40        | 0.100          |
| 60        | 0.150          |
| 80        | 0.210          |
| 100       | 0.350          |
| 120       | 0.700          |
| 140       | 1.500          |
| 155       | 3.500          |

### Sequential Calculations

#### 1. Cross-Sectional Area

$$
A=\frac{\pi d^2}{4}
$$

For a specimen diameter of 20 mm,

$$
A=\frac{\pi(20)^2}{4}
$$

$$
A=314.16\ mm^2
$$

#### 2. Stress

Stress is calculated using:

$$
\sigma=\frac{P}{A}
$$

where:

- $P$ = Applied load
- $A$ = Original cross-sectional area

#### 3. Strain

Strain is calculated using:

$$
\epsilon=\frac{\Delta L}{L}
$$

where:

- $\Delta L$ = Extension
- $L$ = Original gauge length

#### 4. Young's Modulus

Young's Modulus is calculated from the elastic region of the stress-strain curve.

$$
E=\frac{\sigma}{\epsilon}
$$

#### 5. Yield Strength

Yield Strength is calculated using the yield load.

$$
\sigma_y=\frac{P_y}{A}
$$

where:

- $P_y$ = Yield load

#### 6. Ultimate Tensile Strength

Ultimate Tensile Strength is calculated using the maximum load carried by the specimen.

$$
UTS=\frac{P_{max}}{A}
$$

where:

- $P_{max}$ = Maximum load

#### 7. Percentage Elongation

$$
\frac{L_f-L}{L}\times100
$$

where:

- $L_f$ = Final gauge length
- $L$ = Original gauge length

#### 8. Percentage Reduction in Area

Original area:

$$
A=\frac{\pi d^2}{4}
$$

Final neck area:

$$
A_f=\frac{\pi d_f^2}{4}
$$

Percentage reduction in area:

$$

\frac{A-A_f}{A}
\times100
$$

### Solved Numerical Example

A mild steel specimen has:

- Diameter = 20 mm
- Original gauge length = 50 mm
- Applied load = 80 kN
- Extension = 0.21 mm

#### Step 1: Cross-sectional Area

$$
A=\frac{\pi(20)^2}{4}
$$

$$
A=314.16\ mm^2
$$

#### Step 2: Stress

$$
\sigma=\frac{80000}{314.16}
$$

$$
\sigma=254.6\ N/mm^2
$$

#### Step 3: Strain

$$
\epsilon=\frac{0.21}{50}
$$

$$
\epsilon=0.0042
$$

#### Step 4: Young's Modulus

$$
E=\frac{254.6}{0.0042}
$$

$$
E=60619\ N/mm^2
$$

$$
E=60.6\ GPa
$$

### Interpretation of Results

- A linear stress-strain relationship indicates elastic behaviour.
- The yield point marks the beginning of permanent deformation.
- The maximum stress reached during the test is the Ultimate Tensile Strength.
- A larger percentage elongation indicates greater ductility.
- Significant plastic deformation before fracture indicates that the material is ductile.
- The stress-strain curve helps evaluate the suitability of a material for structural applications.

### Interpretation of the Stress-Strain Curve

The stress-strain graph generated during the simulation should be examined carefully.

From the graph, identify:

- Linear elastic region
- Yield point
- Ultimate tensile strength
- Necking region
- Fracture point

Different materials produce different stress-strain curves.

For example:

- Mild steel typically exhibits a distinct yield point and large plastic deformation.
- ASTM A53 steel exhibits higher strength with moderate ductility.
- Corten steel generally exhibits higher strength and good atmospheric corrosion resistance.

Observe the stress-strain graph generated during the simulation. The comparison tab allows these material behaviours to be examined side-by-side. In the Comparison tab, compare the stress-strain curves of ASTM A53 steel, Corten steel, and Mild steel. Observe differences in strength, stiffness, yield behavior, and ductility. Materials with larger strain before fracture exhibit greater ductility, whereas materials sustaining higher stresses generally possess greater tensile strength.

### Result

The tensile test was performed successfully, and the important mechanical properties of the material were determined from the stress-strain behaviour.
