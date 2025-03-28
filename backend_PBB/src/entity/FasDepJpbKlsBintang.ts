import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Fasilitas } from "./Fasilitas";
import { RefDati2 } from "./RefDati2";

@Index("c25_3_ak", ["kdDati2", "kdFasilitas", "kdJpb", "kdPropinsi", "klsBintang", "thnDepJpbKlsBintang"], { unique: true })
@Index("fas_dep_jpb_kls_bintang_pkey", ["kdDati2", "kdFasilitas", "kdJpb", "kdPropinsi", "klsBintang", "thnDepJpbKlsBintang"], { unique: true })
@Index("c25_1_ak", ["kdDati2", "kdFasilitas", "kdJpb", "kdPropinsi", "klsBintang", "thnDepJpbKlsBintang"], { unique: true })
@Index("c25_2_ak", ["kdDati2", "kdFasilitas", "kdJpb", "kdPropinsi", "klsBintang", "thnDepJpbKlsBintang"], { unique: true })
@Entity("fas_dep_jpb_kls_bintang", { schema: "public" })
export class FasDepJpbKlsBintang {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", {
    primary: true,
    name: "thn_dep_jpb_kls_bintang",
    length: 4,
  })
  thnDepJpbKlsBintang!: string;

  @Column("character", { primary: true, name: "kd_fasilitas", length: 2 })
  kdFasilitas!: string;

  @Column("character", { primary: true, name: "kd_jpb", length: 2 })
  kdJpb!: string;

  @Column("character", { primary: true, name: "kls_bintang", length: 4 })
  klsBintang!: string;

  @Column("numeric", {
    name: "nilai_fasilitas_kls_bintang",
    precision: 10,
    scale: 2,
  })
  nilaiFasilitasKlsBintang!: string;

  @ManyToOne(() => Fasilitas, (fasilitas) => fasilitas.fasDepJpbKlsBintangs)
  @JoinColumn([{ name: "kd_fasilitas", referencedColumnName: "kdFasilitas" }])
  kdFasilitas2!: Fasilitas;

  @ManyToOne(() => RefDati2, (refDati2) => refDati2.fasDepJpbKlsBintangs)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
  ])
  refDati!: RefDati2;
}
