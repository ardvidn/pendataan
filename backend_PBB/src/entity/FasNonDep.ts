import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Fasilitas } from "./Fasilitas";
import { RefDati2 } from "./RefDati2";

@Index("fas_non_dep_pkey", ["kdDati2", "kdFasilitas", "kdPropinsi", "thnNonDep"], { unique: true })
@Index("c24_3_ak", ["kdDati2", "kdFasilitas", "kdPropinsi", "thnNonDep"], {
  unique: true,
})
@Index("c24_2_ak", ["kdDati2", "kdFasilitas", "kdPropinsi", "thnNonDep"], {
  unique: true,
})
@Index("c24_1_ak", ["kdDati2", "kdFasilitas", "kdPropinsi", "thnNonDep"], {
  unique: true,
})
@Entity("fas_non_dep", { schema: "public" })
export class FasNonDep {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_non_dep", length: 4 })
  thnNonDep!: string;

  @Column("character", { primary: true, name: "kd_fasilitas", length: 2 })
  kdFasilitas!: string;

  @Column("numeric", { name: "nilai_non_dep", precision: 10, scale: 2 })
  nilaiNonDep!: string;

  @ManyToOne(() => Fasilitas, (fasilitas) => fasilitas.fasNonDeps)
  @JoinColumn([{ name: "kd_fasilitas", referencedColumnName: "kdFasilitas" }])
  kdFasilitas2!: Fasilitas;

  @ManyToOne(() => RefDati2, (refDati2) => refDati2.fasNonDeps)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
  ])
  refDati!: RefDati2;
}
