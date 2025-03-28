import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { Fasilitas } from "./Fasilitas";
import { RefDati2 } from "./RefDati2";

@Index("fas_dep_min_max_pkey", ["kdDati2", "kdFasilitas", "kdPropinsi", "klsDepMax", "klsDepMin", "thnDepMinMax"], { unique: true })
@Index("c26_3_ak", ["kdDati2", "kdFasilitas", "kdPropinsi", "klsDepMax", "klsDepMin", "thnDepMinMax"], { unique: true })
@Entity("fas_dep_min_max", { schema: "public" })
export class FasDepMinMax {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_dep_min_max", length: 4 })
  thnDepMinMax!: string;

  @Column("character", { primary: true, name: "kd_fasilitas", length: 2 })
  kdFasilitas!: string;

  @Column("integer", { primary: true, name: "kls_dep_min" })
  klsDepMin!: number;

  @Column("integer", { primary: true, name: "kls_dep_max" })
  klsDepMax!: number;

  @Column("numeric", { name: "nilai_dep_min_max", precision: 10, scale: 2 })
  nilaiDepMinMax!: string;

  @ManyToOne(() => Fasilitas, (fasilitas) => fasilitas.fasDepMinMaxes)
  @JoinColumn([{ name: "kd_fasilitas", referencedColumnName: "kdFasilitas" }])
  kdFasilitas2!: Fasilitas;

  @ManyToOne(() => RefDati2, (refDati2) => refDati2.fasDepMinMaxes)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
  ])
  refDati!: RefDati2;
}
