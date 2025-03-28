import { Column, Entity, Index, OneToMany } from "typeorm";
import { RefDati2 } from "./RefDati2";

@Index("ref_propinsi_pkey", ["kdPropinsi"], { unique: true })
@Index("a1_1_ak", ["kdPropinsi", "nmPropinsi"], { unique: true })
@Entity("ref_propinsi", { schema: "public" })
export class RefPropinsi {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character varying", { name: "nm_propinsi", length: 30 })
  nmPropinsi!: string;

  @OneToMany(() => RefDati2, (refDati2) => refDati2.kdPropinsi2)
  refDatis!: RefDati2[];
}
