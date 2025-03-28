import { Column, Entity } from "typeorm";

@Entity("temp_dat_njoptkp", { schema: "public" })
export class TempDatNjoptkp {
  @Column("character", { name: "subjek_pajak_id", nullable: true, length: 30 })
  subjekPajakId!: string | null;

  @Column("character", { name: "kd_propinsi", nullable: true, length: 2 })
  kdPropinsi!: string | null;

  @Column("character", { name: "kd_dati2", nullable: true, length: 2 })
  kdDati2!: string | null;

  @Column("character", { name: "kd_kecamatan", nullable: true, length: 3 })
  kdKecamatan!: string | null;

  @Column("character", { name: "kd_kelurahan", nullable: true, length: 3 })
  kdKelurahan!: string | null;

  @Column("character", { name: "kd_blok", nullable: true, length: 3 })
  kdBlok!: string | null;

  @Column("character", { name: "no_urut", nullable: true, length: 4 })
  noUrut!: string | null;

  @Column("character", { name: "kd_jns_op", nullable: true, length: 1 })
  kdJnsOp!: string | null;

  @Column("character", { name: "thn_njoptkp", nullable: true, length: 4 })
  thnNjoptkp!: string | null;
}
