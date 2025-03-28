import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { RefDati2 } from "./RefDati2";

@Index("c41_1_pk", ["jnsTangkiDbkbJpb15", "kapasitasMaxDbkbJpb15", "kapasitasMinDbkbJpb15", "kdDati2", "kdPropinsi", "thnDbkbJpb15"], { unique: true })
@Index("dbkb_jpb15_pkey", ["jnsTangkiDbkbJpb15", "kapasitasMaxDbkbJpb15", "kapasitasMinDbkbJpb15", "kdDati2", "kdPropinsi", "thnDbkbJpb15"], { unique: true })
@Index("c41_2_pk", ["jnsTangkiDbkbJpb15", "kapasitasMaxDbkbJpb15", "kapasitasMinDbkbJpb15", "kdDati2", "kdPropinsi", "thnDbkbJpb15"], { unique: true })
@Entity("dbkb_jpb15", { schema: "public" })
export class DbkbJpb15 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_dbkb_jpb15", length: 4 })
  thnDbkbJpb15!: string;

  @Column("character", {
    primary: true,
    name: "jns_tangki_dbkb_jpb15",
    length: 1,
  })
  jnsTangkiDbkbJpb15!: string;

  @Column("numeric", {
    primary: true,
    name: "kapasitas_min_dbkb_jpb15",
    precision: 9,
    scale: 4,
  })
  kapasitasMinDbkbJpb15!: string;

  @Column("numeric", {
    primary: true,
    name: "kapasitas_max_dbkb_jpb15",
    precision: 9,
    scale: 4,
  })
  kapasitasMaxDbkbJpb15!: string;

  @Column("bigint", { name: "nilai_dbkb_jpb15" })
  nilaiDbkbJpb15!: string;

  @ManyToOne(() => RefDati2, (refDati2) => refDati2.dbkbJpbs4)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
  ])
  refDati!: RefDati2;
}
