import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { RefDati2 } from "./RefDati2";

@Index("c3_2_ak", ["kdBngLantai", "kdDati2", "kdJpb", "kdPropinsi", "thnDbkbStandard", "tipeBng"], { unique: true })
@Index("c3_1_ak", ["kdBngLantai", "kdDati2", "kdJpb", "kdPropinsi", "thnDbkbStandard", "tipeBng"], { unique: true })
@Index("dbkb_standard_pkey", ["kdBngLantai", "kdDati2", "kdJpb", "kdPropinsi", "thnDbkbStandard", "tipeBng"], { unique: true })
@Entity("dbkb_standard", { schema: "public" })
export class DbkbStandard {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_dbkb_standard", length: 4 })
  thnDbkbStandard!: string;

  @Column("character", { primary: true, name: "kd_jpb", length: 2 })
  kdJpb!: string;

  @Column("character", { primary: true, name: "tipe_bng", length: 5 })
  tipeBng!: string;

  @Column("character", { primary: true, name: "kd_bng_lantai", length: 8 })
  kdBngLantai!: string;

  @Column("numeric", { name: "nilai_dbkb_standard", precision: 11, scale: 4 })
  nilaiDbkbStandard!: string;

  @ManyToOne(() => RefDati2, (refDati2) => refDati2.dbkbStandards)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
  ])
  refDati!: RefDati2;
}
