import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { RefDati2 } from "./RefDati2";

@Index("dbkb_jpb16_pkey", ["kdDati2", "kdPropinsi", "klsDbkbJpb16", "lantaiMaxJpb16", "lantaiMinJpb16", "thnDbkbJpb16"], { unique: true })
@Index("c42_1_ak", ["kdDati2", "kdPropinsi", "klsDbkbJpb16", "lantaiMaxJpb16", "lantaiMinJpb16", "thnDbkbJpb16"], { unique: true })
@Entity("dbkb_jpb16", { schema: "public" })
export class DbkbJpb16 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_dbkb_jpb16", length: 4 })
  thnDbkbJpb16!: string;

  @Column("character", { primary: true, name: "kls_dbkb_jpb16", length: 1 })
  klsDbkbJpb16!: string;

  @Column("smallint", { primary: true, name: "lantai_min_jpb16" })
  lantaiMinJpb16!: number;

  @Column("smallint", { primary: true, name: "lantai_max_jpb16" })
  lantaiMaxJpb16!: number;

  @Column("bigint", { name: "nilai_dbkb_jpb16" })
  nilaiDbkbJpb16!: string;

  @ManyToOne(() => RefDati2, (refDati2) => refDati2.dbkbJpbs5)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
  ])
  refDati!: RefDati2;
}
