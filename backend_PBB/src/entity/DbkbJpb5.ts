import { Column, Entity, Index, JoinColumn, ManyToOne } from "typeorm";
import { RefDati2 } from "./RefDati2";

@Index("c31_1_ak", ["kdDati2", "kdPropinsi", "klsDbkbJpb5", "lantaiMaxJpb5", "lantaiMinJpb5", "thnDbkbJpb5"], { unique: true })
@Index("dbkb_jpb5_pkey", ["kdDati2", "kdPropinsi", "klsDbkbJpb5", "lantaiMaxJpb5", "lantaiMinJpb5", "thnDbkbJpb5"], { unique: true })
@Entity("dbkb_jpb5", { schema: "public" })
export class DbkbJpb5 {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_dbkb_jpb5", length: 4 })
  thnDbkbJpb5!: string;

  @Column("character", { primary: true, name: "kls_dbkb_jpb5", length: 1 })
  klsDbkbJpb5!: string;

  @Column("smallint", { primary: true, name: "lantai_min_jpb5" })
  lantaiMinJpb5!: number;

  @Column("smallint", { primary: true, name: "lantai_max_jpb5" })
  lantaiMaxJpb5!: number;

  @Column("bigint", { name: "nilai_dbkb_jpb5" })
  nilaiDbkbJpb5!: string;

  @ManyToOne(() => RefDati2, (refDati2) => refDati2.dbkbJpbs9)
  @JoinColumn([
    { name: "kd_propinsi", referencedColumnName: "kdPropinsi" },
    { name: "kd_dati2", referencedColumnName: "kdDati2" },
  ])
  refDati!: RefDati2;
}
